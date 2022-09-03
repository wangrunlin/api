import app from '@src/app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application on listen http://127.0.0.1:${port}`);
});
