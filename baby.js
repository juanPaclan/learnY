var stdout = 0;
for (i = 2; i < process.argv.length ; i++){
   stdout = stdout + Number(process.argv[i]);
}
console.log(stdout);
