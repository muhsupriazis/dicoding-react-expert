export function generateTreadsWithUser(threads, users) {
  const threadsWithUser = [];
  threads.forEach((thread) => {
    users.forEach((user) => {
      if (thread.ownerId === user.id) {
        const threadWithUser = {
          ...thread,
          user,
        };
        threadsWithUser.push(threadWithUser);
      }
    });
  });

  return threadsWithUser;
}

export function generateTime(date) {
  const current = new Date();
  const inputDate = new Date(date);
  const interval = current - inputDate;
  if (interval < 60000) {
    return ` ${Math.floor(interval / 1000)} detik `;
  }
  if (interval < 60000 * 60) {
    return ` ${Math.floor(interval / 1000 / 60)} menit `;
  }
  if (interval < 60000 * 3600) {
    return ` ${Math.floor(interval / 1000 / 3600)} jam `;
  }

  return ` ${Math.floor(interval / 1000 / 86400)} hari `;
}
