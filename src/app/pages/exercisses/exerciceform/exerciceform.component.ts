import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExerciceService } from 'src/app/services/exercice.service';
import { exercice } from 'src/app/models/exercice.model';

@Component({
  selector: 'app-exerciceform',
  templateUrl: './exerciceform.component.html',
  styleUrls: ['./exerciceform.component.css']
})
export class ExerciceformComponent {
  exerciseForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.exerciseForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      consigne: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
      answer5: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.exerciseForm.value);
  }}
