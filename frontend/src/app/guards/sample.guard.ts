import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class SampleGuard implements CanActivate {
    canActivate() {
        return false;
    }
}