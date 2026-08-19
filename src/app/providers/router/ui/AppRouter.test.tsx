import { componentRender } from "@/shared/lib/tests/componentRender"
import AppRouter from "./AppRouter"
import { getRouteAbout, getRouteProfile } from "@/shared/const/router"
import { screen } from "@testing-library/dom"

describe('app/router/AppRouter', function () {
    test("Страница должна отрендериться", async ()=>{
        componentRender(<AppRouter/>, {
            route: getRouteAbout(),
        })

        const page = await screen.findByTestId("AboutPage");
        expect(page).toBeInTheDocument();
    }),
    test("Страница не найдена", async ()=>{
        componentRender(<AppRouter/>, {
            route: '/a12es',
        })

        const page = await screen.findByTestId("NotFoundPage");
        expect(page).toBeInTheDocument();
    })
    test("Редирект неавторизованного пользователя", async ()=>{
        componentRender(<AppRouter/>, {
            route: getRouteProfile('1'),
        })

        const page = await screen.findByTestId("MainPage");
        expect(page).toBeInTheDocument();
    })
    test("Доступ к закрытой странице для авторизованного пользователя", async ()=>{
        componentRender(<AppRouter/>, {
            route: getRouteProfile('1'),
            initialState:{
                user:{_inited:true, authData:{}}
            }
        })

        const page = await screen.findByTestId("ProfilePage");
        expect(page).toBeInTheDocument();
    })
})