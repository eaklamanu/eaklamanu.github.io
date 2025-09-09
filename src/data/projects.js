// TODO Add a couple lines about each project
const data = [
  {
    title: 'Modeling and Analysis of BPSK and QPSK Transceivers in Octave',
    subtitle: 'Implemented modulation, demodulation, and BER analysis under AWGN channels with results matching theory',
    image: '',
    start_date: '2025-09-01',
    end_date: '2025-09-04',
    desc:
      'Implemented BPSK and QPSK transceivers, including modulation/demodulation and BER analysis under AWGN, with simulated results aligning with theory.\n' +
      'Applied signal space concepts (I/Q basis functions, Gray coding) and noise scaling to validate system robustness.\n'+ 
      'Designed decision algorithms for symbol detection, demonstrating practical trade-offs in bit error rate and spectral efficiency. ' 
  
    },

  {
    title: 'Modeling and Control of a DC Motor in Octave',
    subtitle: 'System modeling, frequency analysis and PID controller design using Ziegler-Nichols tuning',
    image: '',
    start_date: '2025-08-1',
    end_date: '2025-08-29',
    desc:
       'Modeled a DC motor as both first-order and second-order systems, analyzing their dynamic behavior.\n'
      + 'Implemented step and impulse response simulations and extracted key system parameters to evaluate system performance.\n'
      + 'Generated Bode plots to study stability and frequency response.\n'
      + 'Designed and tuned a PID controller using the Ziegler–Nichols method, demonstrating how closed-loop control improves system performance.\n'
      + 'Showcased the effect of controller tuning on rise time, settling time, overshoot, and steady-state error, reinforcing theoretical control principles with practical simulations.',
  },
  {
    title: 'Web-Based Attendance Management System Using a Microcontroller',
    subtitle: '',
    image: '',
    start_date: '2023-01-01',
    end_date: '2023-09-01',
    desc:
      'Developed a web-based attendance management system using a DY50 fingerprint scanner and an ESP 8266 microcontroller for biometric authentication.\n' +
      'Utilized web requests for communication between the fingerprint scanner and the backend, ensuring real-time data exchange.\n'+ 
      'Backend built with Python using the Django framework, providing a robust and scalable solution.\n ' +
      'The system streamlined attendance tracking and improved accuracy using fingerprint identification.',
  
    },
  
  
  

];

export default data;
