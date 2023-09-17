import React from 'react';

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === 'approved') {
      content = comment.content;
    }

    if (comment.status === 'pending') {
      content = 'Awaiting moderation';
    }

    if (comment.status === 'rejected') {
      content = 'This comment has been rejected.';
    }

    return <li key={content.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
