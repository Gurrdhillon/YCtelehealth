import Image from 'next/image';
// import { useTranslations } from 'next-intl';
// import { getTranslations } from 'next-intl/server';
import React from 'react';
import patientData from '../../api/patientdata.json';



type MedicalRecord = {
  date: string;
  diagnosis: string;
  treatment: string;
};

type PatientData = {
  name: string;
  age: number;
  gender: string;
  address: string;
  phoneNumber: string;
  email: string;
  medicalHistory: MedicalRecord[];
};

const patient_data = patientData;


export default  function PatientPortal() {

  return (

    <>
        <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Patient Portal</h1>
        <div className="flex justify-center mb-4">
          <Image
            src={patient_data.profilePicture}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <p className="mb-2"><strong>Name:</strong> {patient_data.name}</p>
        <p className="mb-2"><strong>Age:</strong> {patient_data.age}</p>
        <p className="mb-2"><strong>Gender:</strong> {patient_data.gender}</p>
        <p className="mb-2"><strong>Address:</strong> {patient_data.address}</p>
        <p className="mb-2"><strong>Phone Number:</strong> {patient_data.phoneNumber}</p>
        <p className="mb-4"><strong>Email:</strong> {patient_data.email}</p>
        
        <h2 className="text-xl font-semibold mb-3">Medical History</h2>
       <ul className="list-disc pl-5">
           {patient_data.medicalHistory.map((record, index) => (
            <li key={index} className="mb-2">
              <p><strong>Date:</strong> {record.date}</p>
              <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
              <p><strong>Treatment:</strong> {record.treatment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}



// import Image from 'next/image';
// import { GetServerSideProps } from 'next';
// import React from 'react';

// type MedicalRecord = {
//   date: string;
//   diagnosis: string;
//   treatment: string;
// };

// type PatientData = {
//   name: string;
//   age: number;
//   gender: string;
//   address: string;
//   phoneNumber: string;
//   email: string;
//   medicalHistory: MedicalRecord[];
//   profilePicture: string;
// };

// type PatientPortalProps = {
//   patient_data: PatientData;
// };

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch('http://localhost:3000/patient_data.json');
//   const patient_data: PatientData = await res.json();

//   return {
//     props: {
//       patient_data,
//     },
//   };
// };

// const PatientPortal: React.FC<PatientPortalProps> = ({ patient_data }) => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-2xl font-bold mb-4 text-center">Patient Portal</h1>
        
//         <div className="flex items-center mb-4">
//           <div className="w-24 h-24 mr-4">
//             <Image
//               src={patient_data.profilePicture}
//               alt="Profile Picture"
//               width={96}
//               height={96}
//               className="rounded-full"
//             />
//           </div>
//           <div>
//             <p className="mb-2"><strong>Name:</strong> {patient_data.name}</p>
//             <p className="mb-2"><strong>Age:</strong> {patient_data.age}</p>
//             <p className="mb-2"><strong>Gender:</strong> {patient_data.gender}</p>
//           </div>
//         </div>

//         <p className="mb-2"><strong>Address:</strong> {patient_data.address}</p>
//         <p className="mb-2"><strong>Phone Number:</strong> {patient_data.phoneNumber}</p>
//         <p className="mb-4"><strong>Email:</strong> {patient_data.email}</p>
        
//         <h2 className="text-xl font-semibold mb-3">Medical History</h2>
//         <ul className="list-disc pl-5">
//           {patient_data.medicalHistory.map((record, index) => (
//             <li key={index} className="mb-2">
//               <p><strong>Date:</strong> {record.date}</p>
//               <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
//               <p><strong>Treatment:</strong> {record.treatment}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PatientPortal;

// app/patient/page.tsx


// import Image from 'next/image';
// import React from 'react';

// type MedicalRecord = {
//   date: string;
//   diagnosis: string;
//   treatment: string;
// };

// type PatientData = {
//   name: string;
//   age: number;
//   gender: string;
//   address: string;
//   phoneNumber: string;
//   email: string;
//   medicalHistory: MedicalRecord[];
//   profilePicture: string;
// };

// async function fetchPatientData(): Promise<PatientData> {
//   const res = await fetch('http://localhost:3000/patient_data.json');
//   const data: PatientData = await res.json();
//   return data;
// }

// export default async function PatientPortal() {
//   const patient_data = await fetchPatientData();

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-2xl font-bold mb-4 text-center">Patient Portal</h1>
        
//         <div className="flex items-center mb-4">
//           <div className="w-24 h-24 mr-4">
//             <Image
//               src={patient_data.profilePicture}
//               alt="Profile Picture"
//               width={96}
//               height={96}
//               className="rounded-full"
//             />
//           </div>
//           <div>
//             <p className="mb-2"><strong>Name:</strong> {patient_data.name}</p>
//             <p className="mb-2"><strong>Age:</strong> {patient_data.age}</p>
//             <p className="mb-2"><strong>Gender:</strong> {patient_data.gender}</p>
//           </div>
//         </div>

//         <p className="mb-2"><strong>Address:</strong> {patient_data.address}</p>
//         <p className="mb-2"><strong>Phone Number:</strong> {patient_data.phoneNumber}</p>
//         <p className="mb-4"><strong>Email:</strong> {patient_data.email}</p>
        
//         <h2 className="text-xl font-semibold mb-3">Medical History</h2>
//         <ul className="list-disc pl-5">
//           {patient_data.medicalHistory.map((record, index) => (
//             <li key={index} className="mb-2">
//               <p><strong>Date:</strong> {record.date}</p>
//               <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
//               <p><strong>Treatment:</strong> {record.treatment}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

