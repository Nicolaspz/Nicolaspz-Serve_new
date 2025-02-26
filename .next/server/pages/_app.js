/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_apiClients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/apiClients */ \"./services/apiClients.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _services_apiClients__WEBPACK_IMPORTED_MODULE_5__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _services_apiClients__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, '@sujeitopizza.token');\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/');\n    } catch  {\n        console.log('erro ao deslogar');\n    }\n}\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const isAuthenticated = !!user;\n    const inactivityTimeout = 15 * 60 * 1000;\n    let inactivityTimer;\n    const resetInactivityTimer = ()=>{\n        clearTimeout(inactivityTimer);\n        inactivityTimer = setTimeout(()=>{\n            signOut(); // Chama a função de logout após o tempo de inatividade\n        }, inactivityTimeout);\n    };\n    const handleUserInteraction = ()=>{\n        resetInactivityTimer();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkToken = async ()=>{\n            try {\n                const { '@sujeitopizza.token': token } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();\n                if (token) {\n                    const response = await _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.get('/me');\n                    const { id, name, email, role } = response.data;\n                    const organization = response.data.organizationId;\n                    setUser({\n                        id,\n                        name,\n                        email,\n                        role,\n                        organization\n                    });\n                //console.log(\"Logado\");\n                //console.log(\"organization->\",organization);\n                }\n            } catch (error) {\n                console.log(\"Erro ao verificar o token\", error);\n                signOut();\n            }\n        };\n        checkToken(); // Verifica o token ao carregar o componente\n        // Adiciona event listeners para redefinir o temporizador em interações do usuário\n        window.addEventListener('mousemove', handleUserInteraction);\n        window.addEventListener('mousedown', handleUserInteraction);\n        window.addEventListener('keydown', handleUserInteraction);\n        // Inicia o temporizador quando o componente é montado\n        resetInactivityTimer();\n        return ()=>{\n            // Remove os event listeners e limpa o temporizador quando o componente é desmontado\n            window.removeEventListener('mousemove', handleUserInteraction);\n            window.removeEventListener('mousedown', handleUserInteraction);\n            window.removeEventListener('keydown', handleUserInteraction);\n            clearTimeout(inactivityTimer);\n        };\n    // Restante do seu código...\n    }, []);\n    async function signIn({ email, password }) {\n        try {\n            const response = await _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.post('/session', {\n                email,\n                password\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Logado com sucesso!\");\n            //console.log(\"Response-> \",response.data)\n            const { id, name, token, role, organization } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, '@sujeitopizza.token', token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\" // Quais caminhos terao acesso ao cookie\n            });\n            setUser({\n                id,\n                name,\n                email,\n                role,\n                organization\n            });\n            console.log(\"Oláaaa\");\n            console.log(user?.role);\n            //Passar para proximas requisiçoes o nosso token\n            _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers['Authorization'] = `Bearer ${token}`;\n            if (user?.role === 'admin') {\n                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/dashboard');\n            } else {\n                next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/pedidos');\n            }\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Erro ao Logar\");\n        }\n    }\n    async function signUp({ name, email, password, role, organization }) {\n        try {\n            const response = await _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.post('/users', {\n                name,\n                email,\n                password,\n                role,\n                organization\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Cadastrado com sucesso!\");\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/');\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Erro ao se Cadastrar\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut,\n            signUp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Desktop\\\\SR\\\\ServeServ\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 185,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQyxPQUFPLEVBQUVyQixPQUFPO1lBRXpELElBQUdWLE1BQU1nQixTQUFPLFNBQVE7Z0JBQ3RCMUIsdURBQVcsQ0FBQztZQUNkLE9BQ0k7Z0JBQ0ZBLHVEQUFXLENBQUM7WUFDZDtRQUlGLEVBQUMsT0FBTTBDLEtBQUk7WUFDVDNDLGlEQUFLQSxDQUFDK0IsS0FBSyxDQUFDO1FBQ2Q7SUFDRjtJQUdBLGVBQWVhLE9BQU8sRUFBRW5CLElBQUksRUFBRUMsS0FBSyxFQUFFVSxRQUFRLEVBQUNULElBQUksRUFBQ0UsWUFBWSxFQUFjO1FBQzNFLElBQUc7WUFFRCxNQUFNUCxXQUFXLE1BQU1wQixxREFBR0EsQ0FBQ21DLElBQUksQ0FBQyxVQUFVO2dCQUN4Q1o7Z0JBQ0FDO2dCQUNBVTtnQkFDQVQ7Z0JBQ0FFO1lBQ0Y7WUFFQTdCLGlEQUFLQSxDQUFDc0MsT0FBTyxDQUFDO1lBRWRyQyx1REFBVyxDQUFDO1FBRWQsRUFBQyxPQUFNMEMsS0FBSTtZQUNUM0MsaURBQUtBLENBQUMrQixLQUFLLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUM1QixZQUFZMEMsUUFBUTtRQUFDQyxPQUFPO1lBQUVuQztZQUFNRTtZQUFpQnNCO1lBQVEvQjtZQUFTd0M7UUFBTztrQkFDM0VsQzs7Ozs7O0FBR1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRhc2gvLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/NmQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtkZXN0cm95Q29va2llLHNldENvb2tpZSxwYXJzZUNvb2tpZXN9IGZyb20gJ25vb2tpZXMnXHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpQ2xpZW50cyc7XHJcblxyXG5cclxuXHJcbnR5cGUgQXV0aENvbnRleHREYXRhID0ge1xyXG4gIHVzZXI6IFVzZXJQcm9wcztcclxuICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgc2lnbkluOiAoY3JlZGVudGlhbHM6IFNpZ25JblByb3BzKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gIHNpZ25PdXQ6ICgpID0+IHZvaWQ7XHJcbiAgc2lnblVwOiAoY3JlZGVudGlhbHM6IFNpZ25VcFByb3BzKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG50eXBlIFVzZXJQcm9wcyA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHJvbGU6c3RyaW5nO1xyXG4gIG9yZ2FuaXphdGlvbjpzdHJpbmc7XHJcbiAgXHJcbn1cclxuXHJcbnR5cGUgU2lnbkluUHJvcHMgPSB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFNpZ25VcFByb3BzID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgcm9sZTpzdHJpbmcsXHJcbiAgb3JnYW5pemF0aW9uOnN0cmluZyxcclxufVxyXG5cclxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0RGF0YSlcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpe1xyXG4gIHRyeXtcclxuICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnQHN1amVpdG9waXp6YS50b2tlbicpXHJcbiAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgfWNhdGNoe1xyXG4gICAgY29uc29sZS5sb2coJ2Vycm8gYW8gZGVzbG9nYXInKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzKXtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyUHJvcHM+KClcclxuICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAhIXVzZXI7XHJcbiAgY29uc3QgaW5hY3Rpdml0eVRpbWVvdXQgPSAxNSAqIDYwICogMTAwMDsgXHJcbiAgbGV0IGluYWN0aXZpdHlUaW1lcjogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG4gIGNvbnN0IHJlc2V0SW5hY3Rpdml0eVRpbWVyID0gKCkgPT4ge1xyXG4gICAgY2xlYXJUaW1lb3V0KGluYWN0aXZpdHlUaW1lcik7XHJcbiAgICBpbmFjdGl2aXR5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2lnbk91dCgpOyAvLyBDaGFtYSBhIGZ1bsOnw6NvIGRlIGxvZ291dCBhcMOzcyBvIHRlbXBvIGRlIGluYXRpdmlkYWRlXHJcbiAgICB9LCBpbmFjdGl2aXR5VGltZW91dCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXNlckludGVyYWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmVzZXRJbmFjdGl2aXR5VGltZXIoKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4gIHtcclxuICAgIGNvbnN0IGNoZWNrVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyAnQHN1amVpdG9waXp6YS50b2tlbic6IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoJy9tZScpO1xyXG4gICAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwsIHJvbGV9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnN0IG9yZ2FuaXphdGlvbiA9IHJlc3BvbnNlLmRhdGEub3JnYW5pemF0aW9uSWQ7XHJcblxyXG4gICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcm9sZSxcclxuICAgICAgICAgICAgb3JnYW5pemF0aW9uIFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxvZ2Fkb1wiKTtcclxuICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib3JnYW5pemF0aW9uLT5cIixvcmdhbml6YXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm8gYW8gdmVyaWZpY2FyIG8gdG9rZW5cIiwgZXJyb3IpO1xyXG4gICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja1Rva2VuKCk7IC8vIFZlcmlmaWNhIG8gdG9rZW4gYW8gY2FycmVnYXIgbyBjb21wb25lbnRlXHJcblxyXG4gICAgLy8gQWRpY2lvbmEgZXZlbnQgbGlzdGVuZXJzIHBhcmEgcmVkZWZpbmlyIG8gdGVtcG9yaXphZG9yIGVtIGludGVyYcOnw7VlcyBkbyB1c3XDoXJpb1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZVVzZXJJbnRlcmFjdGlvbik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckludGVyYWN0aW9uKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlVXNlckludGVyYWN0aW9uKTtcclxuXHJcbiAgICAvLyBJbmljaWEgbyB0ZW1wb3JpemFkb3IgcXVhbmRvIG8gY29tcG9uZW50ZSDDqSBtb250YWRvXHJcbiAgICByZXNldEluYWN0aXZpdHlUaW1lcigpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIFJlbW92ZSBvcyBldmVudCBsaXN0ZW5lcnMgZSBsaW1wYSBvIHRlbXBvcml6YWRvciBxdWFuZG8gbyBjb21wb25lbnRlIMOpIGRlc21vbnRhZG9cclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZVVzZXJJbnRlcmFjdGlvbik7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVVc2VySW50ZXJhY3Rpb24pO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJJbnRlcmFjdGlvbik7XHJcbiAgICAgIGNsZWFyVGltZW91dChpbmFjdGl2aXR5VGltZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBSZXN0YW50ZSBkbyBzZXUgY8OzZGlnby4uLlxyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNpZ25Jbih7IGVtYWlsLCBwYXNzd29yZCB9OiBTaWduSW5Qcm9wcyl7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy9zZXNzaW9uJywge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkXHJcbiAgICAgIH0pXHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJMb2dhZG8gY29tIHN1Y2Vzc28hXCIpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiUmVzcG9uc2UtPiBcIixyZXNwb25zZS5kYXRhKVxyXG4gICAgICBjb25zdCB7IGlkLCBuYW1lLCB0b2tlbixyb2xlLG9yZ2FuaXphdGlvbiB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICdAc3VqZWl0b3BpenphLnRva2VuJywgdG9rZW4sIHtcclxuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLCAvLyBFeHBpcmFyIGVtIDEgbWVzXHJcbiAgICAgICAgcGF0aDogXCIvXCIgLy8gUXVhaXMgY2FtaW5ob3MgdGVyYW8gYWNlc3NvIGFvIGNvb2tpZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgcm9sZSxcclxuICAgICAgICAgIG9yZ2FuaXphdGlvblxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIk9sw6FhYWFcIilcclxuICAgICAgY29uc29sZS5sb2codXNlcj8ucm9sZSlcclxuICAgICAgLy9QYXNzYXIgcGFyYSBwcm94aW1hcyByZXF1aXNpw6dvZXMgbyBub3NzbyB0b2tlblxyXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgXHJcbiAgICAgIGlmKHVzZXI/LnJvbGU9PT0nYWRtaW4nKXtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9wZWRpZG9zJyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcblxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVycm8gYW8gTG9nYXJcIilcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduVXAoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQscm9sZSxvcmdhbml6YXRpb259OiBTaWduVXBQcm9wcyl7XHJcbiAgICB0cnl7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvdXNlcnMnLCB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICByb2xlLFxyXG4gICAgICAgIG9yZ2FuaXphdGlvblxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIkNhZGFzdHJhZG8gY29tIHN1Y2Vzc28hXCIpXHJcblxyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRXJybyBhbyBzZSBDYWRhc3RyYXJcIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybihcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIHNpZ25Jbiwgc2lnbk91dCwgc2lnblVwIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkZXN0cm95Q29va2llIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwidG9hc3QiLCJSb3V0ZXIiLCJhcGkiLCJBdXRoQ29udGV4dCIsInNpZ25PdXQiLCJ1bmRlZmluZWQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJpbmFjdGl2aXR5VGltZW91dCIsImluYWN0aXZpdHlUaW1lciIsInJlc2V0SW5hY3Rpdml0eVRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImhhbmRsZVVzZXJJbnRlcmFjdGlvbiIsImNoZWNrVG9rZW4iLCJ0b2tlbiIsInJlc3BvbnNlIiwiZ2V0IiwiaWQiLCJuYW1lIiwiZW1haWwiLCJyb2xlIiwiZGF0YSIsIm9yZ2FuaXphdGlvbiIsIm9yZ2FuaXphdGlvbklkIiwiZXJyb3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpZ25JbiIsInBhc3N3b3JkIiwicG9zdCIsInN1Y2Nlc3MiLCJtYXhBZ2UiLCJwYXRoIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiZXJyIiwic2lnblVwIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\n([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Desktop\\\\SR\\\\ServeServ\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                autoClose: 3000\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Desktop\\\\SR\\\\ServeServ\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Desktop\\\\SR\\\\ServeServ\\\\pages\\\\_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBR3dCO0FBQ1A7QUFDRDtBQUVoQyxTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSiwrREFBWUE7OzBCQUNYLDhEQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDSCwwREFBY0E7Z0JBQUNJLFdBQVc7Ozs7Ozs7Ozs7OztBQUdqQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZGFzaC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgYXV0b0Nsb3NlPXszMDAwfSAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiVG9hc3RDb250YWluZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhdXRvQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupAPIClient: () => (/* binding */ setupAPIClient)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/AuthTokenError */ \"./services/errors/AuthTokenError.ts\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction setupAPIClient(ctx = undefined) {\n    let cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx);\n    const api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        baseURL: 'http://localhost:3333',\n        headers: {\n            Authorization: `Bearer ${cookies['@sujeitopizza.token']}`\n        }\n    });\n    api.interceptors.response.use((response)=>{\n        return response;\n    }, (error)=>{\n        if (error.response.status === 401) {\n            // qualquer erro 401 (não autorizado) devemos deslogar o usuário\n            if (true) {\n                // Estamos no lado do servidor, então você não deve chamar singOut() aqui\n                return Promise.reject(new _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_2__.AuthTokenError());\n            } else {}\n        }\n        return Promise.reject(error);\n    });\n    return api;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFDa0I7QUFFTjtBQUUzQyxTQUFTSSxlQUFlQyxNQUFNQyxTQUFTO0lBQzVDLElBQUlDLFVBQVVOLHFEQUFZQSxDQUFDSTtJQUUzQixNQUFNRyxNQUFNUixvREFBWSxDQUFDO1FBQ3ZCVSxTQUFTO1FBQ1RDLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRUwsT0FBTyxDQUFDLHNCQUFzQixFQUFFO1FBQzNEO0lBQ0Y7SUFFQUMsSUFBSUssWUFBWSxDQUFDQyxRQUFRLENBQUNDLEdBQUcsQ0FBQ0QsQ0FBQUE7UUFDNUIsT0FBT0E7SUFDVCxHQUFHLENBQUNFO1FBQ0YsSUFBSUEsTUFBTUYsUUFBUSxDQUFDRyxNQUFNLEtBQUssS0FBSztZQUNqQyxnRUFBZ0U7WUFDaEUsSUFBSSxJQUE2QixFQUFFO2dCQUNqQyx5RUFBeUU7Z0JBQ3pFLE9BQU9DLFFBQVFDLE1BQU0sQ0FBQyxJQUFJakIsa0VBQWNBO1lBQzFDLE9BQU8sRUFHTjtRQUNIO1FBQ0YsT0FBT2dCLFFBQVFDLE1BQU0sQ0FBQ0g7SUFDdEI7SUFFQSxPQUFPUjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYXNoLy4vc2VydmljZXMvYXBpLnRzPzRiZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcydcclxuaW1wb3J0IHsgQXV0aFRva2VuRXJyb3IgfSBmcm9tICcuL2Vycm9ycy9BdXRoVG9rZW5FcnJvcidcclxuXHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tICcuLi9jb250ZXh0cy9BdXRoQ29udGV4dCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBBUElDbGllbnQoY3R4ID0gdW5kZWZpbmVkKSB7XHJcbiAgbGV0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMzMzMnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llc1snQHN1amVpdG9waXp6YS50b2tlbiddfWBcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBhcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShyZXNwb25zZSA9PiB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfSwgKGVycm9yOiBBeGlvc0Vycm9yKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgLy8gcXVhbHF1ZXIgZXJybyA0MDEgKG7Do28gYXV0b3JpemFkbykgZGV2ZW1vcyBkZXNsb2dhciBvIHVzdcOhcmlvXHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIEVzdGFtb3Mgbm8gbGFkbyBkbyBzZXJ2aWRvciwgZW50w6NvIHZvY8OqIG7Do28gZGV2ZSBjaGFtYXIgc2luZ091dCgpIGFxdWlcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEF1dGhUb2tlbkVycm9yKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEVzdGFtb3Mgbm8gbGFkbyBkbyBjbGllbnRlLCBlbnTDo28gw6kgc2VndXJvIGNoYW1hciBzaW5nT3V0KClcclxuICAgICAgICBzaWduT3V0KClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIGFwaTtcclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJwYXJzZUNvb2tpZXMiLCJBdXRoVG9rZW5FcnJvciIsInNpZ25PdXQiLCJzZXR1cEFQSUNsaWVudCIsImN0eCIsInVuZGVmaW5lZCIsImNvb2tpZXMiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ }),

/***/ "./services/apiClients.ts":
/*!********************************!*\
  !*** ./services/apiClients.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./services/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);\n_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = (0,_api__WEBPACK_IMPORTED_MODULE_0__.setupAPIClient)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGlDbGllbnRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBR2hDLE1BQU1DLE1BQU1ELG9EQUFjQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYXNoLy4vc2VydmljZXMvYXBpQ2xpZW50cy50cz8wOTU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldHVwQVBJQ2xpZW50IH0gZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IHNldHVwQVBJQ2xpZW50KCk7Il0sIm5hbWVzIjpbInNldHVwQVBJQ2xpZW50IiwiYXBpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/apiClients.ts\n");

/***/ }),

/***/ "./services/errors/AuthTokenError.ts":
/*!*******************************************!*\
  !*** ./services/errors/AuthTokenError.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthTokenError: () => (/* binding */ AuthTokenError)\n/* harmony export */ });\nclass AuthTokenError extends Error {\n    constructor(){\n        super('error with authrntication token');\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9lcnJvcnMvQXV0aFRva2VuRXJyb3IudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLHVCQUF1QkM7SUFDbENDLGFBQWE7UUFDWCxLQUFLLENBQUM7SUFDUjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYXNoLy4vc2VydmljZXMvZXJyb3JzL0F1dGhUb2tlbkVycm9yLnRzP2YxYWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1dGhUb2tlbkVycm9yIGV4dGVuZHMgRXJyb3J7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCdlcnJvciB3aXRoIGF1dGhybnRpY2F0aW9uIHRva2VuJylcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiQXV0aFRva2VuRXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/errors/AuthTokenError.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();