import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string = "";

  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    if(this.messageService.message !== ""){
      this.message = this.messageService.message;
    }
    else{
      this.router.navigate(['/index']);
    }
  }

}
