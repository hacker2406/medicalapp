import { Component } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.css'
})
export class NewAppointmentComponent {
  appointmentObj: any={
    
      "name": "",
      "mobileNo": "",
      "city": "",
      "age": 0,
      "gender": "",
      "appointmentDate": "2024-04-23T21:47:40.748Z",
      "appointmentTime": "",
      "isFirstVisit": true,
      "naration": ""
  };
  constructor(private master: MasterService){}
  onSaveAppointment(){
      this.master.createNew(this.appointmentObj).subscribe((res:any)=>{
          if(res.result){
            alert("Appointment Done");
          }
      },error=>{
          alert("APi error");
      }) 
  }
}
