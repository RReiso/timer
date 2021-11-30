const timer = (args)=>{
  for (let arg of args) {
    const num = Number(arg);
    if (num > 0) {
      setTimeout(()=>{
        process.stdout.write('\x07');
        console.log("beep at ", arg);
      }, num * 1000);
    }
  }
};

const args = process.argv;
timer(args.slice(2));
