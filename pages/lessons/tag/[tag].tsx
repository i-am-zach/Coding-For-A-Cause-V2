import React from 'react';
import Layout from '../../../components/Layout';
import LessonsList from '../../../components/LessonsList';
import {
  containsTag,
  getAllLessons,
  getAllTags,
  getNormalizedTags,
} from '../../../lib/lessons';

const TagPostPage = ({ tag, lessons }) => {
  return (
    <Layout>
      <div className="my-container text-center">
        <h1 className="text-4xl font-bold">Filtering by tag: {tag}</h1>
        <LessonsList lessons={lessons} />
      </div>
    </Layout>
  );
};

export default TagPostPage;

export const getStaticPaths = () => {
  const noramlizedTags = getNormalizedTags();
  const tags = getAllTags();

  return {
    paths: [...tags, ...noramlizedTags].map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = ({ params: { tag } }) => {
  let lessons = getAllLessons();
  lessons = lessons.filter((lesson) => containsTag(lesson.slug, tag));

  return {
    props: {
      tag,
      lessons,
    },
  };
};
