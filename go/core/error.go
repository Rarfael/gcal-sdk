package core

type GcalError struct {
	IsGcalError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewGcalError(code string, msg string, ctx *Context) *GcalError {
	return &GcalError{
		IsGcalError: true,
		Sdk:              "Gcal",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *GcalError) Error() string {
	return e.Msg
}
