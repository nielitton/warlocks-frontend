import { ICreateUser } from "@/models/entities/user.entity";
import { createUserService } from "@/services/user/create-user.service";
import { useMutation } from "@tanstack/react-query";
export function UseCreateUser() {
    return useMutation({
        mutationFn: (dataUser: ICreateUser) => createUserService(dataUser),
    })
}