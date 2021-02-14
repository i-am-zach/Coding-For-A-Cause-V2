import fs from 'fs';
import { join } from 'path';
import content from './content';

const lessonsDirectory = join(process.cwd(), 'content', 'lessons');

export const getAllLessons = () => {
  const files = fs.readdirSync(lessonsDirectory);

  return files
    .map((filename) => getLessonBySlug(filename.replace(/\.md$/, '')))
};

export const getLessonBySlug = (slug: string) => {
  return content('content/lessons', slug);
};
