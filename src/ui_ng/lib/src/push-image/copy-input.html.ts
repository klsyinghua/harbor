export const COPY_INPUT_HTML: string = `
<div>
    <div class="command-title" *ngIf="!iconMode">
        {{headerTitle}}
    </div>
    <div>
        <span  [class.hide]="iconMode">
            <input type="text" class="command-input" size="{{inputSize}}" [(ngModel)]="defaultValue" #inputTarget readonly/>
        </span>
        <span>
            <input type="text" size="{{inputSize}}" [(ngModel)]="defaultValue" #inputTarget1 style="width: 1px; min-width: 0px; padding: 0;">
        </span>
        <span>
            <clr-icon shape="copy" [class.is-success]="isCopied" [class.is-error]="hasCopyError" class="info-tips-icon" size="24" [ngxClipboard]="inputTarget1" (cbOnSuccess)="onSuccess($event)" (cbOnError)="onError($event)"></clr-icon>
        </span>
    </div>
    
</div>
`;