import React from 'react';

interface ButtonLoginProps {
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Optional onChange if needed
  width?: string;   // Nhận width từ props
  height?: string;  // Nhận height từ props
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({
  name,
  value,
  width,
  height,
}) => {
  return (
    <div className="form-group">
      <button
        name={name}
        value={value}
        style={{
          width: width,
          height: height,
          padding: '11px 20px',
          gap: '10px',
          borderRadius: '10px',
          background: 'var(--primary-dark-200, #FFA21A)',
          border: 'none',
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '27px',
          textUnderlinePosition: 'from-font',
        }}
      >
        {value}  {/* Nội dung hiển thị của button */}
      </button>
    </div>
  );
};

export default ButtonLogin;
