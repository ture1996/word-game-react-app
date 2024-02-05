import ApiService from "./ApiService";
import { authService } from "./AuthService";

class UserService extends ApiService {

    getHighScores = async () => {
        const { data } = await this.client.get("users", {
            headers: authService.getHeaders(),
        });
        return data;
    };

    get = async (id) => {
        const { data } = await this.client.get(`users/${id}`, {
            headers: authService.getHeaders(),
        });
        return data;
    };

    playGame = async (id, data) => {
        switch (typeof (data)) {
            case "number":
                await this.client.put(`users/${id}?is_ongoing=${data}`, '', {
                    headers: authService.getHeaders(),
                });
                break;
            case "string":
                await this.client.put(`users/${id}?word=${data}`, '', {
                    headers: authService.getHeaders(),
                })
                break;
        }
    }

    changeNickName = async (id, nickName) => {
        await this.client.put(`users/${id}?nick_name=${nickName}`, '', {
            headers: authService.getHeaders()
        })
    }

    deleteAccount = async (id) => {
        await this.client.delete(`users/${id}`, {
            headers: authService.getHeaders()
        })
    }

}

export const userService = new UserService();