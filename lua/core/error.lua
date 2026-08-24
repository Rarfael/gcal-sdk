-- Gcal SDK error

local GcalError = {}
GcalError.__index = GcalError


function GcalError.new(code, msg, ctx)
  local self = setmetatable({}, GcalError)
  self.is_sdk_error = true
  self.sdk = "Gcal"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GcalError:error()
  return self.msg
end


function GcalError:__tostring()
  return self.msg
end


return GcalError
