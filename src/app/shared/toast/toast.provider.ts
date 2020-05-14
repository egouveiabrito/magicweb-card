import { Injectable } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
} from '@nebular/theme';
@Injectable()
export class ToastProvider {
  private destroyByClick = true;
  private duration = 2000;
  private hasIcon = false;
  private position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  private preventDuplicates = false;

  public success: NbComponentStatus = 'success';
  public info: NbComponentStatus = 'info';
  public warning: NbComponentStatus = 'warning';
  public primary: NbComponentStatus = 'primary';
  public danger: NbComponentStatus = 'danger';

  constructor(private toastrService: NbToastrService) { }

  public showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';
    this.toastrService.show(body, `${titleContent}`, config);
  }
}
