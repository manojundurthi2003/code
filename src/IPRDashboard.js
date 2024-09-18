import React, { useState } from 'react';
import './IPRDashboard.css'; // Add some CSS for styling

const IPRDashboard = () => {
  // Sample patent data
  const [patents, setPatents] = useState([
    {
      id: 1,
      title: 'AI-Powered Image Processing System',
      patentNumber: 'US12345678',
      applicant: 'Tech Innovations Inc.',
      filingDate: '2023-01-15',
      status: 'Pending',
      owner: 'Tech Innovations Inc.',
      expiryDate: '2043-01-15',
      lastReviewDate: '2024-02-10',
      examinerAssigned: 'John Doe',
      upcomingDeadlines: '2024-05-01 - Respond to Office Action',
      renewalFees: 'Due on 2028-01-15',
      legalDisputes: 'None',
    },
    {
      id: 2,
      title: 'Blockchain-Based Secure Voting System',
      patentNumber: 'US23456789',
      applicant: 'Blockchain Technologies LLC',
      filingDate: '2022-11-05',
      status: 'Granted',
      owner: 'Blockchain Technologies LLC',
      expiryDate: '2042-11-05',
      lastReviewDate: '2023-12-01',
      examinerAssigned: 'Jane Smith',
      upcomingDeadlines: '2027-11-05 - Renewal Fee',
      renewalFees: 'Due on 2027-11-05',
      legalDisputes: 'None',
    },
    {
      id: 3,
      title: 'Quantum Computing Chip Architecture',
      patentNumber: 'US34567890',
      applicant: 'Quantum Innovations Corp.',
      filingDate: '2021-05-20',
      status: 'Pending',
      owner: 'Quantum Innovations Corp.',
      expiryDate: '2041-05-20',
      lastReviewDate: '2022-08-15',
      examinerAssigned: 'Alice Johnson',
      upcomingDeadlines: '2024-03-15 - Office Action Response',
      renewalFees: 'Due on 2026-05-20',
      legalDisputes: 'None',
    },
    {
      id: 4,
      title: 'Autonomous Vehicle Navigation System',
      patentNumber: 'US45678901',
      applicant: 'AutoDrive Inc.',
      filingDate: '2020-09-12',
      status: 'Granted',
      owner: 'AutoDrive Inc.',
      expiryDate: '2040-09-12',
      lastReviewDate: '2021-10-20',
      examinerAssigned: 'Robert Lee',
      upcomingDeadlines: '2025-09-12 - Renewal Fee',
      renewalFees: 'Due on 2025-09-12',
      legalDisputes: 'Ongoing dispute with SafeRoad Inc.',
    },
    {
      id: 5,
      title: 'Wearable Health Monitoring Device',
      patentNumber: 'US56789012',
      applicant: 'HealthTech Solutions',
      filingDate: '2023-03-22',
      status: 'Pending',
      owner: 'HealthTech Solutions',
      expiryDate: '2043-03-22',
      lastReviewDate: '2024-01-30',
      examinerAssigned: 'Emily Davis',
      upcomingDeadlines: '2024-09-01 - Examiner Interview',
      renewalFees: 'Due on 2028-03-22',
      legalDisputes: 'None',
    },
    {
      id: 6,
      title: 'Smart Home Energy Management System',
      patentNumber: 'US67890123',
      applicant: 'Green Energy Innovators',
      filingDate: '2021-08-14',
      status: 'Granted',
      owner: 'Green Energy Innovators',
      expiryDate: '2041-08-14',
      lastReviewDate: '2022-10-12',
      examinerAssigned: 'George Martin',
      upcomingDeadlines: '2026-08-14 - Renewal Fee',
      renewalFees: 'Due on 2026-08-14',
      legalDisputes: 'None',
    },
    {
      id: 7,
      title: 'AR-Based Educational Platform',
      patentNumber: 'US78901234',
      applicant: 'EduTech Innovations',
      filingDate: '2022-02-17',
      status: 'Pending',
      owner: 'EduTech Innovations',
      expiryDate: '2042-02-17',
      lastReviewDate: '2023-05-22',
      examinerAssigned: 'Lucy Perez',
      upcomingDeadlines: '2024-07-10 - Office Action Response',
      renewalFees: 'Due on 2027-02-17',
      legalDisputes: 'None',
    },
    {
      id: 8,
      title: 'Next-Generation 5G Network Infrastructure',
      patentNumber: 'US89012345',
      applicant: 'Telecom Innovations Inc.',
      filingDate: '2019-07-11',
      status: 'Granted',
      owner: 'Telecom Innovations Inc.',
      expiryDate: '2039-07-11',
      lastReviewDate: '2021-09-05',
      examinerAssigned: 'David Brown',
      upcomingDeadlines: '2024-07-11 - Renewal Fee',
      renewalFees: 'Due on 2024-07-11',
      legalDisputes: 'None',
    },
    {
      id: 9,
      title: 'AI-Based Voice Recognition System',
      patentNumber: 'US90123456',
      applicant: 'VoiceTech Solutions',
      filingDate: '2022-10-30',
      status: 'Pending',
      owner: 'VoiceTech Solutions',
      expiryDate: '2042-10-30',
      lastReviewDate: '2023-11-18',
      examinerAssigned: 'Anna White',
      upcomingDeadlines: '2024-08-15 - Office Action Response',
      renewalFees: 'Due on 2027-10-30',
      legalDisputes: 'None',
    },
    {
      id: 10,
      title: 'Smart Agriculture Monitoring System',
      patentNumber: 'US01234567',
      applicant: 'AgriTech Corp.',
      filingDate: '2023-05-29',
      status: 'Pending',
      owner: 'AgriTech Corp.',
      expiryDate: '2043-05-29',
      lastReviewDate: '2024-07-03',
      examinerAssigned: 'Michael Green',
      upcomingDeadlines: '2025-01-20 - Respond to Office Action',
      renewalFees: 'Due on 2028-05-29',
      legalDisputes: 'None',
    },
  ]);

  return (
    <div className="ipr-dashboard">
      <h1>IPR Dashboard - Patent Tracking</h1>
      <table className="patent-table">
        <thead>
          <tr>
            <th>Patent Title</th>
            <th>Patent Number</th>
            <th>Applicant</th>
            <th>Status</th>
            <th>Filing Date</th>
            <th>Owner</th>
            <th>Expiry Date</th>
            <th>Last Review Date</th>
            <th>Examiner Assigned</th>
            <th>Upcoming Deadlines</th>
            <th>Renewal Fees</th>
            <th>Legal Disputes</th>
          </tr>
        </thead>
        <tbody>
          {patents.map((patent) => (
            <tr key={patent.id}>
              <td>{patent.title}</td>
              <td>{patent.patentNumber}</td>
              <td>{patent.applicant}</td>
              <td>{patent.status}</td>
              <td>{patent.filingDate}</td>
              <td>{patent.owner}</td>
              <td>{patent.expiryDate}</td>
              <td>{patent.lastReviewDate}</td>
              <td>{patent.examinerAssigned}</td>
              <td>{patent.upcomingDeadlines}</td>
              <td>{patent.renewalFees}</td>
              <td>{patent.legalDisputes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPRDashboard;
