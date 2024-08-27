import {useState} from 'react';

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('One');

  const onInputChange = ({target})=>{
    setInputValue(target.value);
  }

  const onSubmit= ()=>{
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange = {onInputChange}
      />
    </form>
  );
};
