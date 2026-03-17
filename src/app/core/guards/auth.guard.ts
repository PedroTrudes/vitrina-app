import { inject, Inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";
import { AuthService } from "../../features/auth/services/auth.service";

export const authGuard: CanActivateChildFn = (route , state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const token = authService.getToken();

    if(token){
        return true;
    }
    router.navigate(['/auth/login']);
    return false;
}