function Form({children}){
  return (
    <form className="bg-gradient-to-r from-green-500 to-blue-500 ... flex justify-center items-start px-4 border">
        {children}
    </form>
  );
}

export default Form;
