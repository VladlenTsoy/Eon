import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TrialLessonService} from '../services/trial-lesson.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.less'],
})
export class RecordComponent implements OnInit {
  requestForm: FormGroup;
  btnLoading = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private trialLesson: TrialLessonService,
    private message: NzMessageService
  ) {
    this.activateRoute.params.subscribe(params => this.changeType(params['discipline'], params['type']));
  }

  ngOnInit() {
  }

  changeType(discipline, type) {
    this.requestForm = this.fb.group({
      discipline: [discipline, [Validators.required]],
      category: [type, [Validators.required]],
      city: [null, [Validators.required]],
      fullName: [null, [Validators.required]],
      email: [null, [Validators.email]],
      phoneNumberPrefix: ['+998'],
      phoneNumber: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    this.btnLoading = true;
    for (const i in this.requestForm.controls) {
      this.requestForm.controls[i].markAsDirty();
      this.requestForm.controls[i].updateValueAndValidity();
    }

    this.trialLesson.request(this.requestForm.value).subscribe(response => {
      this.btnLoading = false;
      this.requestForm.reset();
      this.message.create('success', `Вы успешно отправили заявку на пробный урок!`, {nzDuration: 5000});
    });
  }
}
