import { join } from "path";
import fs from "fs";

import content from "./content";

const membersDirectory = join(process.cwd(), 'content', 'members');

export const getAllMembers = () => {
    const files = fs.readdirSync(membersDirectory); 

    return files.map(filename => getMemberBySlug(filename.replace(/\.md$/, "")));
}

export const getMemberBySlug = (slug) => {
    return content(join('content', 'members'), slug);
}