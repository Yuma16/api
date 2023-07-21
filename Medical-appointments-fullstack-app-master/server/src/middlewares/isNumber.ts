const numberRegex = /^\d+$/;

const isNumber = async (query: number = 0) =>{
  console.log(query);
  
  if(!numberRegex.test(query.toString())){
    throw new Error('Field must be of type number!');
  };
};

export default isNumber;