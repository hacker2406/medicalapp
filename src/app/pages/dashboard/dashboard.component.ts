import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  services: { name: string; description: string; }[] = [
    { name: 'Ambulance 24*7 Service', description: 'Emergency medical transportation available round the clock.' },
    { name: 'Expert Consultancy', description: 'Consult with our experienced medical professionals for expert advice.' },
    { name: 'Beds Facility', description: 'Comfortable and well-equipped beds for patients\' convenience.' },
    { name: 'Medicines', description: 'Wide range of high-quality medicines available onsite.' }
  ];

  doctors: { name: string; specialization: string; image: string; }[] = [
    { name: 'Dr. John Doe', specialization: 'Cardiology', image: 'assets/download2.jpg' },
    { name: 'Dr. Jane Smith', specialization: 'Neurology', image: 'assets/download2.jpg' },
    { name: 'Dr. Michael Johnson', specialization: 'Pediatrics', image: 'assets/download3.jpg' }
  ];

}
