const promise: Promise<number> = new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
    }, 1000);
  });
  
  type AwaitedType = Awaited<typeof promise>;
  