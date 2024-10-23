import React from 'react';

// export const Thumb = (props) => {
//   const { selected, onClick, imageSrc } = props;

//   return (
//     <div
//       className={`embla-thumbs__slide${selected ? ' embla-thumbs__slide--selected' : ''}`}
//     >
//       <button
//         onClick={onClick}
//         type="button"
//         className="embla-thumbs__slide__button"
//       >
//         <img
//           className="embla-thumbs__slide__image"
//           src={imageSrc}
//           alt="Thumbnail"
//         />
//       </button>
//     </div>
//   );
// };

export const Thumb = (props) => {
  const { selected, onClick, imageSrc } = props;

  return (
    <div
      className={`embla-thumbs__slide${selected ? ' embla-thumbs__slide--selected' : ''}`}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__button"
      >
        <img
          className="embla-thumbs__slide__image"
          src={imageSrc}
          alt="Thumbnail"
        />
      </button>
    </div>
  );
};
