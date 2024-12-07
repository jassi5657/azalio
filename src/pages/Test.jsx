import React from 'react';
import './test.css'; // Ensure this path is correct

const Slider = ({ width, height, quantity, reverse, images }) => {
  return (
    <div
      className={`slider ${reverse ? 'reverse' : ''}`}
      style={{
        '--width': width,
        '--height': height,
        '--quantity': quantity,
      }}
    >
      <div className="list">
        {images.map((imageObj, index) => (
          <div className="item" style={{ '--position': index + 1 }} key={index}>
            <img src={imageObj.src} alt={`Slide ${index + 1}`} />
            <div className="title">{imageObj.title}</div> {/* Title under the image */}
          </div>
        ))}
      </div>
    </div>
  );
};

const Test = () => {
  const slider2Images = [
    { src: '/cloud/ansble.png', title: 'Ansible' },
    { src: '/cloud/cloudwatch.png', title: 'CloudWatch' },
    { src: '/cloud/Elastic-Search.png', title: 'Elastic Search' },
    { src: '/cloud/Kibana-1.png', title: 'Kibana' },
    { src: '/cloud/logstash.png', title: 'Logstash' },
    { src: '/cloud/OpenShift.png', title: 'OpenShift' },
    { src: '/cloud/prometheus-1.png', title: 'Prometheus' },
    { src: '/cloud/Splunk-1.png', title: 'Splunk' },
    { src: '/cloud/sumologic.png', title: 'Sumo Logic' },
  ];

  return (
    <main>
      <h1>Tools We Use</h1>
      <Slider width="200px" height="200px" quantity={9} reverse={true} images={slider2Images} />
    </main>
  );
};

export default Test;