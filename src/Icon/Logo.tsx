interface Props {
  width: string;
  height: string;
  fill: string;
}

const Logo = ({ width, height, fill }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.9855 29.7205C27.2281 30.0838 26.9855 30.5076 26.561 30.5076H20.3756C19.9511 30.5076 19.5872 30.326 19.3447 29.9627L10.7336 15.7342L0.970266 30.8103C0.667058 31.2342 0 31.0525 0 30.5076V8.16581C0 7.49979 0.181925 7.31815 0.545775 6.77323L6.5493 0.234167C6.8525 -0.189661 7.51956 -0.00802051 7.51956 0.536901V17.7322L19.284 0.900182C19.466 0.657995 19.7085 0.476354 20.0117 0.476354H26.743C27.0462 0.476354 27.2887 0.839636 27.1068 1.08182L17.5254 15.492L26.9855 29.7205Z"
        fill={fill}
      />
    </svg>
  );
};

export default Logo;