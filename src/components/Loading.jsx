import React from 'react';
import LoadingBarContainer, { LoadingBar } from 'react-redux-loading-bar';

export default function Loading() {
  return (
    <LoadingBarContainer>
      <LoadingBar className="loading" />
    </LoadingBarContainer>
  );
}
