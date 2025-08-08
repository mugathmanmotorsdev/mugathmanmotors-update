export default function InquiryEmailTemplate( name: string, email: string, message: string ) {
    
    return (`
        <div style="font-family: Arial, sans-serif; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(21,1,80,0.08); max-width: 480px; margin: 0 auto; border: 1px solid #eee;">
            <div style="padding: 24px 32px; border-bottom: 2px solid #150150; background: #f9f8fc; border-top-left-radius: 8px; border-top-right-radius: 8px;">
            <h2 style="margin: 0; color: #150150; font-size: 22px; font-weight: 700;">New Inquiry Received</h2>
            </div>
            <div style="padding: 24px 32px;">
            <div style="margin-bottom: 16px;">
                <span style="color: #150150; font-weight: 600;">Name:</span>
                <span style="margin-left: 8px;">${name}</span>
            </div>
            <div style="margin-bottom: 16px;">
                <span style="color: #150150; font-weight: 600;">Email:</span>
                <span style="margin-left: 8px;">${email}</span>
            </div>
            <div>
                <span style="color: #150150; font-weight: 600;">Message:</span>
                <div style="background: #f3f0fa; padding: 12px; border-radius: 4px; color: #333; margin-top: 8px; white-space: pre-line;">
                ${message}
                </div>
            </div>
            </div>
            <div style="padding: 16px 32px; font-size: 13px; color: #888; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; background: #faf9fc; border-top: 1px solid #eee;">
            This is an automated email from Mugathman Motors website inquiry form.
            </div>
        </div>
    `)
}