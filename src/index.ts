import bull from 'bull';

const queue = new bull('build', 'redis://127.0.0.1:6379');
queue.process((job) => {
  console.log('queue process', job.data);
  return Promise.resolve();
});

setTimeout(() => {
  console.log('add to queue');
  queue.add({
    id: 1,
    name: 'test job',
  });
},         2000);

