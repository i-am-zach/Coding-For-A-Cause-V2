import fs from 'fs';
import { join } from 'path';
import content from './content';

const lessonsDirectory = join(process.cwd(), 'content', 'lessons');

export const getAllLessons = () => {
  // Gets all the markdown lessons
  const files = fs.readdirSync(lessonsDirectory);

  return files.map((filename) =>
    getLessonBySlug(filename.replace(/\.md$/, '')),
  );
};

export const getLessonBySlug = (slug: string) => {
  // Gets a markdown lesson by its slug
  const lesson = content('content/lessons', slug);
  return lesson;
};

export const getAllTags = () => {
  // Gets all the tags from the lessons
  const lessons = getAllLessons();
  const tagsSet = new Set();

  lessons.forEach((lesson) => {
    lesson.frontmatter['tags'].forEach((tag: string) => {
      tagsSet.add(tag);
    });
  });

  return Array.from(tagsSet);
};

export const getNormalizedTags = () => {
  // Gets all the tags from lessons and normalizes them (to lowercase)
  const lessons = getAllLessons();
  const tagsSet = new Set();

  lessons.forEach((lesson) => {
    lesson.frontmatter['tags'].forEach((tag: string) => {
      tagsSet.add(tag.toLowerCase());
    });
  });

  return Array.from(tagsSet);
};

export const containsTag = (lessonSlug: string, tag: string) => {
  // Will case insensitively test if a lesson contains a tag using a regex expression
  const lesson = getLessonBySlug(lessonSlug);
  const tags = lesson.frontmatter['tags'];
  const regex = new RegExp(tags.join('|'), 'i');
  return regex.test(tag);
};
