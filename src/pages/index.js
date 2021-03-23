import React from "react"
import { graphql } from 'gatsby';
import styled from 'styled-components';

// import SEO from "../components/seo"

const QuestionGridStyles = styled.div`
  //
`;

const SingleQuestionStyles = styled.div`
  margin-bottom: 10px;
  border: 1px solid black;
`;

export default function IndexPage({ data }) {
  return (
    <>
      <h2>
        Questions
      </h2>
      <QuestionGridStyles>
        {data.questions.edges.map(({node: {title, asker, tweetUrl, timestamp, episode}}) => {
          return (
            <SingleQuestionStyles>
              <h2>{title}</h2>
              {tweetUrl && <a href={tweetUrl}>Twitter</a>}
              <p>{episode.releaseDate}</p>
              <p>Asked by {asker}</p>
              <a href={`overcast.fm/${episode.overcastSlug}/${timestamp}`}></a>
              <a href={`atp.fm/${episode.number}`}>atp.fm/{episode.number}</a>
            </SingleQuestionStyles>
          );
        })}
      </QuestionGridStyles>
    </>
  );
}

export const query = graphql`
query {
  questions: allStrapiQuestions {
    edges {
      node {
        title
        asker
        tweetUrl
        timestamp
        episode {
          overcastSlug
          releaseDate
          number
        }
      }
    }
  }
}
`;
