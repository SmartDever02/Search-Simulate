const BackgroundAnimation = () => {
  return (
    <ul className='circles'>
      {new Array(9).fill(true).map((_, index) => (
        <li key={'square' + index} />
      ))}
    </ul>
  );
};

export default BackgroundAnimation;
