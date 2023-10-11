const secret ="Super Secret";
const john = 'john';
const peter = 'peter';
const sayhi = (name)=>{
    console.log(`Hello there ${name}`);
}
sayhi('susan');
sayhi(peter);
sayhi(john);
//would'nt it be nice if the names come from another file and print function takes that and print just to keep our data separate;
