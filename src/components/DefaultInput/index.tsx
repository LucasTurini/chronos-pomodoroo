type DefaultInputProps = {
    type: 'text';
};


export function DefaultInput({ type }: DefaultInputProps) {
  return  (
<>
    <label htmlFor="input">task</label>
    <input id='input' type={type} />
</>
  )
}