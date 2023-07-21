const hasNoNumbers = /^[^\d]*$/;

const hasOnlyCharacters = async (name: string) =>{
  if(!hasNoNumbers.test(name)) {
    throw new Error('Names must not contain numbers');
  };
};

export default hasOnlyCharacters;