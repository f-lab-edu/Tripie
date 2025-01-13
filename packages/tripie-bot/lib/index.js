// import commands from 'probot-commands';
export default app => {
  app.on('issues.opened', async context => {
    const issueComment = context.issue({
      body: 'Thanks for opening this issue!',
    });
    await context.octokit.issues.createComment(issueComment);
  });
  app.on('push', async context => {
    app.log.info(context);
    const Comment = context.issue({
      body: '작업물이 push 됨!',
    });
    await context.octokit.issues.createComment(Comment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/
  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
//# sourceMappingURL=index.js.map
