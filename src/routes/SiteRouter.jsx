import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFoundPage';
import LeaderboardPage from '../pages/LeaderboardPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DetailThreadPage from '../pages/DetailThreadPage';
import AddNewThreadPage from '../pages/AddNewThreadPage';

export default function SiteRoute() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="leaderboard" element={<LeaderboardPage />} />
      </Route>
      <Route path="/auth">
        <Route index element={<NotFound />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/threads">
        <Route index element={<NotFound />} />
        <Route path="add" element={<AddNewThreadPage />} />
        <Route path=":id" element={<DetailThreadPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
