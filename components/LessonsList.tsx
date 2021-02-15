import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const LessonsList = ({ lessons }) => {
  return (
    <ul className="mt-8">
      {lessons.map((lesson) => (
        <li className="py-3" key={lesson.slug}>
          <Link href={`/lessons/${lesson.slug}`}>
            <a className="text-blue-500 hover:text-blue-400 hover:underline text-xl">
              {lesson.frontmatter.emoji} {lesson.frontmatter.title}
            </a>
          </Link>
          <p className="text-sm text-gray-500">
            {'Tags: '}
            {lesson.frontmatter.tags.map((tag: string, index: number) => (
              <Link href={`/lessons/tag/${tag}`} key={tag}>
                <a>
                  {tag}
                  {index !== lesson.frontmatter.tags.length - 1 ? ', ' : null}
                </a>
              </Link>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
};

LessonsList.propTypes = {
  lessons: PropTypes.array,
};

export default LessonsList;
