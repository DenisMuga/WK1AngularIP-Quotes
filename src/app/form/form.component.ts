import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output()formEvent=new EventEmitter<Quote>();
  @Input () quotesarray!: Quote[]



  constructor() { }

  ngOnInit(): void {
  }

  submitDetails(form:NgForm){
    
    let formData=form.value;
    let dataSent= new Quote(this.quotesarray.length+1,formData.name,formData.title,formData.quote,formData.author,new Date(formData.date),0,0);
    
    
    this.formEvent.emit(dataSent);


  }


}
