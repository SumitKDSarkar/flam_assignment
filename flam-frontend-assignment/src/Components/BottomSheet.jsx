
import React from 'react';
import './BottomSheet.css';

const BottomSheet = ({ height, onClose }) => {
  return (
    <div className="bottom-sheet" style={{ height: `${height}px` }}>
      <div className="handle"></div>
      <div className="content">
        <h2>Bottom Sheet Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          sapien nec odio scelerisque iaculis.
        </p>
        <p>
          Nullam viverra odio at justo finibus, in auctor enim
          dictum. Suspendisse vehicula est non arcu lacinia, sit amet
          finibus est aliquam. In tristique varius volutpat.
        </p>
      </div>
      {height !== null && (
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      )}
    </div>
  );
};

export default BottomSheet;
