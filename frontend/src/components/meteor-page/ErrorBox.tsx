export interface ErrorBoxProps {
  error: string;
  description: string;
}

const ErrorBox = (props: ErrorBoxProps) => {
  return <div className='error-card'>
    <span className='error-card__title'>
      {props.error}
    </span>
    <span className='error-card__message'>
      {props.description}
    </span>
  </div>;
};

export default ErrorBox;