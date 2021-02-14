import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import marked from 'marked';

export default function content(path: string, slug: string) {
  const filePath = join(process.cwd(), path, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContents);
  const htmlString = marked(content);

  return {
    body: {
      html: htmlString,
      markdown: content,
    },
    extension: '.md',
    slug: slug,
    path: filePath,
    frontmatter: serailzeFrontmatter(data),
  };
}

const serailzeFrontmatter = (frontmatter: Object) => {
    let output = {};
    const entries = Object.entries(frontmatter);
    for(const [key, value] of entries) {
        if(value instanceof Date) {
            output[key] = value.toDateString();
        } else {
            output[key] = value;
        }
    }
    return output;
}
