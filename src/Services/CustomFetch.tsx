export default async function customFetch(
  URL: string,
  {
    method = 'GET',
    bodyReq = null,
    params = null,
    token = null,
  }: CustonFetchProps,
) {
  if (!URL) {
    return {error: 'invalid URL'};
  }

  const finalURL = params ? URL + '/' + params : URL;
  let headers: HeadersInit_ = new Headers();

  headers = token
    ? {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }
    : {'Content-Type': 'application/json', Accept: '*/*'};
  let response;
  const newBodyReq = {
    ...bodyReq,
  };
  try {
    response = await fetch(finalURL, {
      method,
      body: bodyReq ? JSON.stringify(newBodyReq) : null,
      headers,
    })
      .then(responseData => responseData.json())
      .then(resp => {
        return resp;
      });
  } catch (e) {
    throw e;
  }

  return response;
}

type CustonFetchProps = {
  method: MethodProps;
  bodyReq?: any | null;
  params?: any | null;
  token?: string | null;
};

type MethodProps = 'GET' | 'DELETE' | 'POST' | 'PUT';
