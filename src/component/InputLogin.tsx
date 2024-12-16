import 'bootstrap/dist/css/bootstrap.min.css';

interface InputLoginProps {
  title: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  errorMessage?: string;
  isError?: boolean;
}

const InputLogin: React.FC<InputLoginProps> = ({ title, type = 'text', name, value, onChange, placeholder, errorMessage, isError }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} style={{
        width: '100%', height: '27px',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '27px'
      }}>{title}</label>

      <input style={{
        width: '100%',
        height: '49px',
        padding: '11px 16px',
        gap: '10px',
        borderRadius: '10px',
        opacity: '1',
        background: '#F3F3F3',
        border: '1px solid #F3F3F3',
        outline: 'none', 
        boxShadow: 'none', 
      }}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`form-control ${isError ? "is-invalid" : ""}`}
      />
      {isError && <div className="invalid-feedback">{errorMessage}</div>}
    </div>
  );
};

export default InputLogin;
