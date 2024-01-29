import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  FormData: FormGroup = this.builder.group({
    to_name: ['Admin', Validators.required],
    your_email: ['', [Validators.required, Validators.email]],
    from_name: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private builder: FormBuilder,private toastr: ToastrService) {}

  ngOnInit(): void {
    
  }

  send(){
    if (this.FormData.valid) {
      emailjs.send("your_service_id", "your_template_id", {
        to_name: this.FormData.value.to_name,
        your_email: this.FormData.value.your_email,
        from_name: this.FormData.value.from_name,
        message: this.FormData.value.message
      },"your_public_key")
      .then(response => {
        console.log('Email sent successfully:', response);
        this.toastr.success("Email sent successfully", 'Success');
        
      })
      .catch(error => {
        console.error('Email failed to send:', 'Error');
        this.toastr.error('Email failed to send:', 'Error');
      });
    } else {
      console.log('Form is not valid');
      this.toastr.error('Please fill in all required fields.', 'Error');
    }
  }
}
