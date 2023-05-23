import { Button, Input } from 'semantic-ui-react';

const Form = ({ setInput, handleSubmit }) => {
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Enter a city" onChange={handleInputChange} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
